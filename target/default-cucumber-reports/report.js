$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ilkdosya.feature");
formatter.feature({
  "name": "Googleda arama yapma",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@googlearama"
    }
  ]
});
formatter.scenario({
  "name": "TC01_kullanici googleda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@googlearama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici google sayfasindadir",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_google_sayfasindadir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kemal ozden aramasi yapar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.kullanici_kemal_ozden_aramasi_yapar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "arama sayfasinin basligi dogrulanir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleAramaStepDefinitions.arama_sayfasinin_basligi_dogrulanir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});