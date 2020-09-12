function _estimate_speed(hero_speed, hero_cr, enemy_cr) {
    const t = hero_cr / hero_speed;
    const enemy_speed = Math.ceil(enemy_cr / t);
    return enemy_speed;
}

function estimate() {
    const result_body = document.getElementById("result");
    result_body.innerHTML = "";

    speeds = {};
    for (var z = 1; z <= 4; z = z+3) {
        var i;
        for (i = z; i <= z+2; ++i) {
            const enemy_selection = document.getElementById("enemy_" + i);
            const enemy_id = enemy_selection.options[enemy_selection.selectedIndex].value;

            const enemy_cr_id = "enemy_" + i + "_cr";
            const enemy_cr = parseInt(document.getElementById(enemy_cr_id).value, 10);
            
            if (enemy_id && !isNaN(enemy_cr)) {
                // enemy available
                const enemy_hero_name = HEROES.find(h => h.id == enemy_id).name;
                $(result_body).append(`<ul class="list-group" id="est_${enemy_hero_name}">`);
                $(result_body).append(`<li class="list-group-item active">${enemy_hero_name}</li>`);

                estimations = [];
                var j;
                for (j = z; j <= z+2; ++j) {
                    const hero_selection = document.getElementById("hero_" + j);
                    var hero_key = hero_selection.options[hero_selection.selectedIndex].value;

                    const hero_cr_id = "hero_" + j + "_cr";
                    const hero_cr = parseInt(document.getElementById(hero_cr_id).value, 10);
                    
                    if (!isNaN(hero_cr)) {
                        var hero_speed = parseInt(document.getElementById(`hero_${j}_speed`).value, 10);
                        if (hero_key && isNaN(hero_speed)) {
                            hero_speed = _get_speed(hero_key);
                            const estimated_speed = _estimate_speed(hero_speed, hero_cr, enemy_cr);
                            estimations.push(estimated_speed);
                            hero_id = hero_key.split('||')[0];
                            $(result_body).append(`<li class="list-group-item">${estimated_speed} from ${HEROES.find(h => h.id == hero_id).name}</li>`);
                        } else if(hero_key && !isNaN(hero_speed)) {
                            const estimated_speed = _estimate_speed(hero_speed, hero_cr, enemy_cr);
                            estimations.push(estimated_speed);
                            hero_id = hero_key.split('||')[0]; // don't need split ?? due to subtext in selector
                            if (hero_id === "unnamed") {
                                $(result_body).append(`<li class="list-group-item">${estimated_speed} from Unnamed Hero ${j}</li>`);
                            } else {
                                $(result_body).append(`<li class="list-group-item">${estimated_speed} from ${HEROES.find(h => h.id == hero_id).name}</li>`);
                            }
                        } else if(!isNaN(hero_speed)) {
                            const estimated_speed = _estimate_speed(hero_speed, hero_cr, enemy_cr);
                            estimations.push(estimated_speed);
                            $(result_body).append(`<li class="list-group-item">${estimated_speed} from hero ${j}</li>`);
                        }
                    }
                }
                speeds[enemy_id] = estimations;
                $(result_body).append(`</ul><p></p>`);
            }
        }
    }
    $(".collapse-result").collapse('show');
    return speeds;
}

function _get_speed(hero_key) {
    const heroes = JSON.parse(localStorage.getItem("heroes"));
    return heroes.find(h => h.key == hero_key).speed;
}

function _round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function _construct_report_data(index, enemy_id, speeds, hp, artifact_selected_index) {
    const speed_sum = speeds.reduce((a,b) => a + b, 0);
    const avg_speed = _round((speed_sum / speeds.length), 1) || 0;
    const max_speed = Math.max(...speeds);

    if (hp == "") {
        hp = 0;
    }

    var artifact_name = "unknown artifact";
    if(artifact_selected_index > 0) {
        const artifact_sel = document.getElementById(`enemy_${index}_artifact`);
        const artifact_id = artifact_sel.options[artifact_sel.selectedIndex].value;
        artifact_name = ARTIFACTS.find(a => a.id == artifact_id).name;
    }

    var has_counter = document.getElementById(`enemy_${index}_counter_set`).checked;
    var has_immunity = document.getElementById(`enemy_${index}_immunity_set`).checked;
    var has_lifesteal = document.getElementById(`enemy_${index}_lifesteal_set`).checked;

    return {
        enemy_name: HEROES.find(h => h.id == enemy_id).name,
        speeds: "[" + speeds.join(', ') + "]",
        max_speed: max_speed,
        avg_speed: avg_speed,
        hp: hp,
        artifact_name: artifact_name,
        has_counter: has_counter,
        has_immunity: has_immunity,
        has_lifesteal: has_lifesteal
    };
}

function build_report(speeds) {
    // Crawl data
    var data = [];
    for (i = 0; i <= 1; ++i) {
        var round_data = []
        for (r = 1; r <= 3; ++r) {
            const index = r + i * 3;
            const enemy_selection = document.getElementById(`enemy_${index}`);
            const enemy_id = enemy_selection.options[enemy_selection.selectedIndex].value;
            if(enemy_id) {
                const artifact_sel = document.getElementById(`enemy_${index}_artifact`);
                const artifact_selected_index = artifact_sel.selectedIndex;
                var hp = document.getElementById(`enemy_${index}_hp`).value;
                round_data.push(_construct_report_data(index, enemy_id, speeds[enemy_id], hp, artifact_selected_index));
            }
        }
        round_data.sort((a,b) => -(a.max_speed - b.max_speed));
        data.push(round_data);
    }

    // Clear report
    const report = document.getElementById("report");
    report.value = "";
    
    const enemy_name = document.getElementById("enemy_name");
    if (enemy_name.value !== "") {
        report.value += enemy_name.value + "\n\n";
    }
    
    // Build output
    const template = localStorage.getItem("template");
    if (template != null) {
        for (round_data of data) {
            for (d of round_data) {
                let set_information = "";
                
                if (d.has_immunity) {
                    set_information += "**Immunity-Set**";
                }
                
                if (d.has_counter) { 
                    if (set_information !== "") {
                        set_information += " + ";
                    }
                    set_information += "**Counter-Set**";
                }
                if (d.has_lifesteal) { 
                    if (set_information !== "") {
                        set_information += " + ";
                    }
                    set_information += "**Lifesteal-Set**";
                }
                
                var line = template.replace('[HP]', d.hp)
                            .replace('[ART]', d.artifact_name)
                            .replace('[MAX-SPD]', d.max_speed)
                            .replace('[AVG-SPD]', d.avg_speed)
                            .replace('[NAME]', d.enemy_name)
                            .replace('[SETS]', set_information);

                const report = document.getElementById("report");
                report.value += line + "\n";
            }
            
            report.value += "\n";
       }
    }
}

function estimate_and_report() {
    const speeds = estimate();
    build_report(speeds);
}

document.getElementById("btn_estimate_and_report").addEventListener("click", estimate_and_report);