const appkey = "ym_coke_1547734580470";

export async function getAllStudents () {
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
            .then(resp => resp.json()).then(resp => resp.data);
}

export async function getStudentsByPage (page = 1, limit = 10) {
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
            .then(resp => resp.json()).then(resp => resp.data);
}