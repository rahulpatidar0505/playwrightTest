const { test, expect, request, path, fs } = require("@playwright/test");

const baseUrl = "http://mix-internal.qa.cd4.private.crt.nuance.com/qws/rest";

function randomString(length) {
  let random_id = "test_" + Math.random(length)
  return random_id;
}
let qwsId;

const createProjectPayload = {
                                "languageDomainTopic":"gen",
                                "locales":[
                                "en_US"
                                ],
                                "id":randomString(10)
                            }

test("Api test", async () => {
  const apiContext = await request.newContext();
  const defaultLocaleResponse = await apiContext.get(
    baseUrl + "/locale/defaultLocale"
  );
  expect(defaultLocaleResponse.ok()).toBeTruthy();
  const defaultLocaleResponseJson = await defaultLocaleResponse.json();
  console.log(defaultLocaleResponseJson);
  expect(await defaultLocaleResponseJson.locale).toBe("en_US");
});

test('Create project', async() => {
    const apiContext = await request.newContext()
    const createProjectResponse = await apiContext.post(baseUrl + "/projects",
    {data : createProjectPayload,
    headers: {'x-nuance-engine-pack-version': 'hosted'}})
    expect(createProjectResponse.ok()).toBeTruthy();
    const createProjectResponseJson = await createProjectResponse.json()
    console.log(createProjectResponseJson.id)
    qwsId = createProjectResponseJson.id
});

test('Import txt file', async() => {
  const apiContext = await request.newContext()
  const createProjectResponse = await apiContext.post(baseUrl + "/projects",
  {data : createProjectPayload,
  headers: {'x-nuance-engine-pack-version': 'hosted'}})
  expect(createProjectResponse.ok()).toBeTruthy();
  const createProjectResponseJson = await createProjectResponse.json()
  console.log(createProjectResponseJson.id)
  const qwsId = createProjectResponseJson.id

  const file = path.resolve("data/", "sample.txt");
  path.resolve()
  const textFile = fs.readFileSync(file);

  const importTxtResponse = await apiContext.post(baseUrl + 'data/' + qwsId + '/utterances',
  {
    headers: {'x-nuance-engine-pack-version': 'hosted',
            ContentType: "multipart/form-data",
            Accept: "*/*"
          },
  
    multipart: {
      file: {
        name: file,
        mimeType: "text/plain",
        buffer: textFile,
      },
      title: "Import txt file",
    }
  }
  )
  expect(importTxtResponse.ok()).toBeTruthy();
});