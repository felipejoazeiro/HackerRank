function getCount(objects) {
    let equal = 0;
    for(let o of objects) {
        equal += (o.x == o.y);
    }
    return equal;
}