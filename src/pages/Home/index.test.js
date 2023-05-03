import {
  findAllByText,
  fireEvent,
  queryAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { window } from "@testing-library/user-event/dist/tab";
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
  it("a list of events is displayed", () => {
    // to implement
    render(<Home />);
  });
  it("a list a people is displayed", () => {
    // to implement
    render(<Home />);
    const team = screen.getByTestId("team-testid");
    expect(team).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    // to implement ok
    render(<Home />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement ok
    render(<Home />);
    const lastEvent = screen.getByTestId("last-event");
    expect(lastEvent).toBeInTheDocument();
  });

  it("should display a list of social", () => {
    // to implement
    render(<Home />);
    const socials = screen.getAllByTestId("social-media-link");
    console.log(socials);
    expect(socials).toHaveLength(4);
  });
});
