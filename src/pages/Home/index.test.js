import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { tab } from "@testing-library/user-event/dist/tab";
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
  });
  it("a list a people is displayed", () => {
    // to implement
  });
  it("a footer is displayed", () => {
    // to implement
  });
  it("an event card, with the last event, is displayed", () => {
    // to implement
  });

  it("should display a list of social", () => {
    //
  });
});

describe("When a list of social media is created in footer", () => {
  it("should display the 4 social media of 77 events(twitch,facebook,twitter,youtube)", () => {
    // to write
  });
  describe("and a click is triggered on the social media icon link", () => {
    it("Twitch link should open a new tab with the youtube page", () => {
      render(<Home />);
      const links = screen.getAllByRole("link");
      console.log(links);
      user.click(links[0]);
      /*
      a paufiner avec Nissim
      */
      const mockFN = jest.fn();
      const opened = tab.open;

      tab.open = mockFN;

      expect(mockFN).toBeCalled();
      /*
      
      const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: false,
      });
      links[0].dispatchEvent(event);

      expect(window.open).toHaveBeenCalledWith(links[0])*/
    });
  });
});
