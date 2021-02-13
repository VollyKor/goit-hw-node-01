const path = require("path");
const { program } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const contactsPathName2 = path.resolve(__dirname, "./db/contacts copy.json");

// readFile(contactsPathName2);
// writeFile(contactsPathName2, JSON.stringify("Hello"));
// listContacts();
// getContactById(1);
// removeContact(2);
// addContact("bob", "Bob@gmail.com", "342-54-54");

program
  .version("0.0.1")
  .requiredOption("-a, --action <action>", "Action type")
  .option("-i, --id <id>", "Output folder")
  .option("-n, --name <name>", "name")
  .option("-e, --email <email>", "email")
  .option("-p, --phone <number>", "Phone number")
  .parse(process.argv);

const data = program.opts();

switch (data.action) {
  case "list":
    listContacts();
    break;
  case "get":
    data.id ? getContactById(data.id) : console.log("id absent");
    break;
  case "add":
    data.name && data.email && data.phone
      ? addContact(data.name, data.email, data.phone)
      : console.log("missing some data for new contact");
    break;
  case "remove":
    data.id ? removeContact(data.id) : console.log("id absent");
    break;
  default:
    console.log(`action -  '${data.action}' not supported`);
}
