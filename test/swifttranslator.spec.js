import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 – simple daily sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama rata yanavaa');

  await expect(outputBox).toContainText(
    'මම රට යනවා',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0002 – Compound sentence conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('api kaeema kanna yanavaa, passe gedhara yanavaa');

  await expect(outputBox).toContainText(
    'අපි කෑම කන්න යනවා, පස්සෙ ගෙදර යනවා',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0003 – Complex conditional sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oya enavaa kiyala dhannavaanam mama balan innavaa.');

  await expect(outputBox).toContainText(
    'ඔය එනවා කියල දන්නවානම් මම බලන් ඉන්නවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0004 – Interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('oyaata dhaen kohomadha?');

  await expect(outputBox).toContainText(
    'ඔයාට දැන් කොහොමද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0005 – Imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('vahaama mehi enna. ');

  await expect(outputBox).toContainText(
    'වහාම මෙහි එන්න. ',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0006 – Positive sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama ehema karanavaa.');

  await expect(outputBox).toContainText(
    'මම එහෙම කරනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0007 – Negative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama ehema karannee naehae.');

  await expect(outputBox).toContainText(
    'මම එහෙම කරන්නේ නැහැ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0008 – Greeting translation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('aayuboovan!');

  await expect(outputBox).toContainText(
    'ආයුබෝවන්!',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0009 – Request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mata udhavvak karanna puluvandha?');
  await expect(outputBox).toContainText(
    'මට උදව්වක් කරන්න පුලුවන්ද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0010 – Response sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('hari, mama ehema karannam.');
  await expect(outputBox).toContainText(
    'හරි, මම එහෙම කරන්නම්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0011 – Polite phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('samaavenna, eeka athvaeradhiimak.');
  await expect(outputBox).toContainText(
    'සමාවෙන්න, ඒක අත්වැරදීමක්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0012 – Informal phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('ehema karapan.');
  await expect(outputBox).toContainText(
    'එහෙම කරපන්.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0013 – Daily expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mata nidhimathayi.');
  await expect(outputBox).toContainText(
    'මට නිදිමතයි.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0014 – Multi-word expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('kaeema kanna');
  await expect(outputBox).toContainText(
    'කෑම කන්න',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0015 – Proper spacing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mata paan kanna oonee.');
  await expect(outputBox).toContainText(
    'මට පාන් කන්න ඕනේ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0016 – Repeated words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('hari hari');
  await expect(outputBox).toContainText(
    'හරි හරි',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0017 – Past tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama iiyee gedhara giyaa.');
  await expect(outputBox).toContainText(
    'මම ඊයේ ගෙදර ගියා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0018 – Present tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama dhaen vaeda karanavaa.');
  await expect(outputBox).toContainText(
    'මම දැන් වැඩ කරනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0019 – Future tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('mama heta enavaa.');
  await expect(outputBox).toContainText(
    'මම හෙට එනවා.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0020 – English brand word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('Zoom meeting ekak thiyennee.');
  await expect(outputBox).toContainText(
    'Zoom meeting එකක් තියෙන්නේ.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0021 – Place name', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('api trip eka Kandy valata yamudha.');
  await expect(outputBox).toContainText(
    'අපි trip එක Kandy වලට යමුද.',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0022 – Abbreviation handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('OTP eka dhenna');
  await expect(outputBox).toContainText(
    'OTP එක දෙන්න',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0023 – Punctuation handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('eeka hariyata vaeda karanavaadha?');
  await expect(outputBox).toContainText(
    'ඒක හරියට වැඩ කරනවාද?',
    { timeout: 15000 }
  );
});

test('Pos_Fun_0024 – Long paragraph input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/'); 
  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();
  await inputBox.fill('dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.');
  await expect(outputBox).toContainText(
    'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.',
    { timeout: 15000 }
  );
});

//Negative test cases

test('Neg_Fun_0001 – Missing spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mamagedharayanavaa');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0002 – Vowel missing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedhr ynv');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0003 – Excessive slang and informal words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('adooo vaedak baaragaththaanam eeka hariyata karapanko bQQ');
  
  await expect(outputBox).toContainText(
    'අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපන්කො බං',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0004 – Special characters in input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedara @@@');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0005 – Multiple consecutive spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedara    yanavaa');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0006 – Very long repetitive input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.oyaa hari, ehenam api yamu. appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.adoo vaedak baaragaththaanam eeka hariyata dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa ve');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා.ඔයා හරි, එහෙනම් අපි යමු. අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහන්කෝ.අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වෙ',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0007 – English-only sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('Please send the file');
  
  await expect(outputBox).toContainText(
    'කරුණාකර ෆයිල් එක එවන්න',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0008 – Abbreviation mixed with Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('FYI mama enavaa');
  
  await expect(outputBox).toContainText(
    'FYI මම එනවාඅ',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0009 – Emoji included in text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mama gedhara yanavaa 😊');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා',
    { timeout: 15000 }
  );
});

test('Neg_Fun_0010 – Empty input submission', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('');
  
  await expect(outputBox).toContainText(
    'මම ගෙදර යනවා',
    { timeout: 15000 }
  );
});

//Positive UI test case

test('Pos_UI_0001 – Real-time translation update', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.click();
  await inputBox.type('mata   raeeta kanna bath   oonee.', { delay: 120 });
  await expect(outputBox).toContainText(
    'මට   රෑට කන්න බත්   ඕනේ.',
    { timeout: 15000 }
  );
});