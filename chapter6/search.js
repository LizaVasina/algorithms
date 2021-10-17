// поиск в ширину
// найти в графе человека, имя которого включает '1'

function checkPerson(name) {
    if (!name) {
        return false;
    }

    return name.includes("1");
}

function search(name) {
    const search_queue = [];
    graph[name] && graph[name].forEach(friend => search_queue.push(friend));
    const searched = [];

    while (search_queue) {
        let person = search_queue.shift();
        if (!searched.includes(person)) {
            if (checkPerson(person)) {
                console.log('gotcha',  person);
                return true;
            } else {
                graph[person] && graph[person].forEach(friend => search_queue.push(friend));
                searched.push(person);
            }
        }
    }

    return false;
}

const graph = {};
graph["you"] = ["alice", "bob", "joe"];
graph["alice"] = ["stanly", "steve"];
graph["bob"] = ["kate", "stefany"];
graph["kate"] = [];
graph["joe"] = [];
graph["steve"] = ["sasha", "mark", "cristen1"];
graph["stefany"] = [];
graph["sasha"] = ["ivan"];
graph["mark"] = [];
graph["cristen"] = ["edward"];
graph["edward"] = [];
graph["ivan"] = [];

search("you");