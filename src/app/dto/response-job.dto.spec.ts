import { ResponseJobDTO } from "./response-job.dto"

describe('RespondeJobDTO', () => {
    it('should validate ResponseJobDTO properties ', () => {
        //1. Initialiser l'objet
        let responseDTO: ResponseJobDTO = {
            data: [{description: "description0", title: "title0"}],
            links: {},
            meta: {}
        }
        //3. Valider les propriétes
        expect(responseDTO.data.length).toEqual(1);
        expect(responseDTO.data[0].description).toEqual("description0");
        expect(responseDTO.data[0].title).toEqual("title0");

    })

})
