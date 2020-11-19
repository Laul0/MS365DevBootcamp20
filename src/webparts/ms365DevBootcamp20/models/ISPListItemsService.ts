export default interface ISPListItemsService {

    getBootcampEvents(t: String): Promise<Array<Object>>;
}
