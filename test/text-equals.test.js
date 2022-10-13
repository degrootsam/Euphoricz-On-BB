test('Using textEquals 1.0: equal returns true if right value matches the left value', async () => {
  const equal = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum Ipsum', comparator: 'eq', toLower: false });
  assert(equal, { result: true });
});

test('Using textEquals 1.0: "equal" returns false if right value does not match the left value', async () => {
  const equal = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'eq', toLower: false });
  assert(equal, { result: false });
});

test('Using textEquals 1.0: "not equal" returns true if right value does not match the left value', async () => {
  const notEqual = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'neq', toLower: false });
  assert(notEqual, { result: true });
});

test('Using textEquals 1.0: "not equal" returns false if right value matches the left value', async () => {
  const notEqual = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum Ipsum', comparator: 'neq', toLower: false });
  assert(notEqual, { result: false });
});

test('Using textEquals 1.0: "contains" returns true if the left value contains the right value', async () => {
  const contains = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'cont', toLower: false });
  assert(contains, { result: true });
});

test('Using textEquals 1.0: "contains" returns false if the left value does not contain the right value', async () => {
  const contains = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Dolor', comparator: 'cont', toLower: false });
  assert(contains, { result: false });
});

test('Using textEquals 1.0: "not contains" returns true if the left value does not contain the right value', async () => {
  const notContains = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Dolor', comparator: 'ncont', toLower: false });
  assert(notContains, { result: true });
});

test('Using textEquals 1.0: "not contains" returns false if the left value does not contain the right value', async () => {
  const notContains = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'ncont', toLower: false });
  assert(notContains, { result: false });
});



test('Using textEquals 1.0: "starts with" returns true if the left value starts with the right value', async () => {
  const startsWith = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'startsWith', toLower: false });
  assert(startsWith, { result: true });
});

test('Using textEquals 1.0: "starts with" returns false if the left value does not start with the right value', async () => {
  const startsWith = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Ipsum', comparator: 'startsWith', toLower: false });
  assert(startsWith, { result: false });
});

test('Using textEquals 1.0: "text equals" returns true if the left value ends with the right value', async () => {
  const endsWith = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Ipsum', comparator: 'endsWith', toLower: false });
  assert(endsWith, { result: true });
});

test('Using textEquals 1.0: "text equals" returns false if the left value does not end with the right value', async () => {
  const endsWith = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: 'Lorum', comparator: 'endsWith', toLower: false });
  assert(endsWith, { result: false });
});

test('Using textEquals 1.0: "regmatch" returns true if the left value matches the pattern of the right value', async () => {
  const regMatch = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: /([a-z])/g, comparator: 'regMatch', toLower: false });
  assert(regMatch, { result: true });
});

test('Using textEquals 1.0: "regmatch" returns false if the left value does not match the pattern of the right value', async () => {
const regMatch = await $app['textEquals 1.0']({ leftValue: 'Lorum Ipsum', rightValue: /([0-9])/g, comparator: 'regMatch', toLower: false });
assert(regMatch, { result: false });
});
