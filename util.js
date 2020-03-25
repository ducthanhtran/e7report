function add_hero() {
    const selection = document.getElementById("hero_add");
    const hero_id = selection.options[selection.selectedIndex].value;
    const note = document.getElementById("hero_add_note").value;
    const speed = parseInt(document.getElementById("hero_add_speed").value, 10);

    if(hero_id) {
        var old_items = JSON.parse(localStorage.getItem("heroes")) || [];

        const new_item = {
            'key': hero_id + '||' + note,
            'hero_id': hero_id,
            'hero_name': HEROES.find(h => h.id == hero_id).name,
            'note': note,
            'speed': speed
        }
        old_items.push(new_item)
        
        localStorage.setItem("heroes", JSON.stringify(old_items));
        load_table();
    }
}

// todo sort by key directly?
function sort_heroes(heroes) {
    function _compare(a, b) {
        const name_cmp = a.hero_name.localeCompare(b.hero_name);
        const note_cmp = a.note.localeCompare(b.note);
        if(name_cmp != 0) {
            return name_cmp;
        } else {
            return note_cmp;
        }
    }
    heroes.sort(_compare);
    return heroes;
}

function remove_hero(key) {
    var heroes = JSON.parse(localStorage.getItem("heroes"));
    index = heroes.findIndex(h => h.key == key);
    heroes.splice(index, 1);
    localStorage.setItem("heroes", JSON.stringify(heroes));
}

function _clear() {
    const table = document.getElementById("tbl");
    var row_count = table.rows.length;
    while(--row_count) {
        table.deleteRow(row_count);
    }
    
    for (var i=1; i <= 6; ++i) {
        const selector = document.getElementById(`hero_${i}`);
        $(selector).children().remove();
    }
}

function load_table() {
    _clear();
    const heroes = sort_heroes(JSON.parse(localStorage.getItem("heroes")));

    const table = document.getElementById("heroes_tbl");
    for (const o of heroes) {
        $(table).append(`<tr id="tbl_${o.key}">
                <td>${o.hero_name}</td>
                <td>${o.note}
                <td>${o.speed}</td>
                <td><button type="button" class="btn btn-danger" onClick=delete_hero(this)>Delete</button></tr>`)
    }

    for (var i=1; i <= 6; ++i) {
        const select = document.getElementById(`hero_${i}`);
        heroes.forEach(function(o) { select.add(new Option(o.hero_name + ' | ' + o.note, o.key)); });
    }
}

function delete_hero(row) {
    const tr_elem = row.parentNode.parentNode;
    const key = tr_elem.id.substr(4);

    remove_hero(key);

    const table = row.parentNode.parentNode.parentNode;
    table.removeChild(tr_elem);

    load_table();
}

function copy_to_clipboard() {
    var report = document.getElementById("report");
    report.select();
    document.execCommand("copy");
}


function save_template() {
    const template = document.getElementById("template").value;
    localStorage.setItem("template", template);
}


function load_template() {
    const template = localStorage.getItem("template");
    if(template != null) {
        const template_field = document.getElementById("template");
        template_field.value = template;
    }
}


function on_load() {
    load_table();
    load_template();
}


document.getElementById("btn_save_template").addEventListener("click", save_template);
document.getElementById("btn_add_hero").addEventListener("click", add_hero);
document.getElementById("btn_copy").addEventListener("click", copy_to_clipboard);
window.onload = on_load;

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window'});
});