Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked restaurant", ({ I }) => {
  I.seeElement("#list");
  I.see("There's no favorite Restaurant", "#list");
});
