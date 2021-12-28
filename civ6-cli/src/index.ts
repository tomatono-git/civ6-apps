import { ImportCli } from "./cli/ImportCli";
// import { Main } from "./main";

new ImportCli().importUnit().catch(error => {
    // TODO デバッグ
    console.log('error=%o', error);
});

// Main.execute().catch(error => {
//     console.log('error=%o', error);
// });
