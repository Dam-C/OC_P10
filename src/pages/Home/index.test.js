import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    // to implement
    render(<Home />);
    await screen.findByTestId("card-testid");
  });
  it("a list a people is displayed", async () => {
    // to implement ok
    render(<Home />);

    await screen.findByText("Samira");
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Alice");
    await screen.findByText("Luís");
    await screen.findByText("Christine");
    await screen.findByText("Isabelle");

    expect(screen.getByTestId("team-testid")).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    // to implement ok
    render(<Home />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement ok
    render(<Home />);
    expect(screen.getByTestId("last-event")).toBeInTheDocument();
  });

  it("should display a list of social", async () => {
    // to implement ok
    render(<Home />);
    await screen.findByTestId("twitch-icon");
    await screen.findByTestId("fb-icon");
    await screen.findByTestId("twitter-icon");
    await screen.findByTestId("yt-icon");
  });
});
