import { BasePage } from "./base-page";

export class IndexPage extends BasePage {
  url = this.baseUrl + "/";
  title = "Hi, I'm Joe Gilbert";
  navigationLink = "Home";
}
