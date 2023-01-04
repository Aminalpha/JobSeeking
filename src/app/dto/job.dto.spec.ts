import { JobDTO } from "./job.dto"

describe("JobDTO", () => {

    it('should validate JobDTO properties', () => {
        //Initialiser l'objet 
        let jobDTO: JobDTO = {
            title: "title0",
            description: "description0"
        }
        //Vérifier les propriétes de l'objet
        expect(jobDTO.title).toEqual("title0");
        expect(jobDTO.description).toEqual("description0");

    })

})