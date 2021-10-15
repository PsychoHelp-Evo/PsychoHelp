import http from "./http-common"

class PsychologistsApiService {
    getAll() {
        return http.get("/psychologists");
    }

    getById(id) {
        return http.get(`/psychologists/${id}`);
    }

    create(data) {
        return http.post("/psychologists", data);
    }

    update(id, data) {
        return http.put(`/psychologists/${id}`, data);
    }

    delete(id) {
        return http.delete(`/psychologists/${id}`);
    }

    findByName(name) {
        return http.get(`/psychologists?name_like=${name}`);
    }

    findBySpecialization(specialization){
        return http.get(`/psychologists?specialization=${specialization}`);
    }

    findByGenre(genre){
        return http.get(`/psychologists?genre=${genre}`);
    }

    findBySessionType(sessionType){
        return http.get(`/psychologists?sessionType=${sessionType}`);
    }

    findByGenreAndSessionType(genre, sessionType){
        return http.get(`/psychologists?genre=${genre}&sessionType=${sessionType}`)
    }
}

export default new PsychologistsApiService();