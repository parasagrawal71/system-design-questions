import { IUserService } from "./IUserService";
import { LegacyXmlService } from "./LegacyXmlService";

// IMPORTANT: Interface implemented here
export class XmlServiceAdapter implements IUserService {
  private legacyXmlService: LegacyXmlService;

  constructor(legacyXmlService: LegacyXmlService) {
    this.legacyXmlService = legacyXmlService;
  }

  fetchUserData(): string {
    const xmlData = this.legacyXmlService.fetchUserData();
    // convert XML into JSON
    return JSON.stringify({ name: "John", age: 30 }); // JSON response
  }
}
