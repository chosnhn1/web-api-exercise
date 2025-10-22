const users = getUsers();
const rules = new Intl.PluralRules('en-US');
const form = rules.select(users.length);


function formatUserCount(users) {
  // message defined by user list length.
  const messages = {
    one: "There is 1 user.",
    other: `There are ${users.length} users.`
  };

  const rules = new Intl.PluralRules('en-US');
  return messages[rules.select(users.length)];
}