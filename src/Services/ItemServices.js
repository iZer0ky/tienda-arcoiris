import instance from "../Config/axios"

export function getByQuery(query=""){
    return instance.get("/sites/MLA/search?q="+query+"#json")
}

export function getById(id){
    return instance.get("items/"+id);
}