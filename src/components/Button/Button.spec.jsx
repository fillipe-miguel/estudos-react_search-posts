import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from ".";

describe("<Button/>", () => {
    it("should render the button with text", () => {
        render(<Button>Load more</Button>);

        // Passo quantas acerções eu quero que ocorra no meu teste
        // Mais comum em testes assincronos
        expect.assertions(2);

        // Capturando o botão pelo texto que passo para ele
        const button = screen.getByRole("button", { name: /load more/i });

        // Para ver se ele está no documento
        expect(button).toBeInTheDocument();

        // Se está sendo renderizado com texto (EXPECIFICO)
        expect(button).toHaveTextContent("Load more");
    });

    it("should call function on button click", () => {
        // Criando um mock de uma função
        const fn = jest.fn();
        render(<Button onClick={fn}>Load more</Button>);
        const button = screen.getByRole("button", { name: /load more/i });

        fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it("should disabled when disabled is true", () => {
        render(<Button disabled={true}>Load more</Button>);
        expect(
            screen.getByRole("button", { name: /load more/i })
        ).toBeDisabled();
    });

    it("should enabled when disabled is false", () => {
        render(<Button disabled={false}>Load more</Button>);
        expect(
            screen.getByRole("button", { name: /load more/i })
        ).toBeEnabled();
    });
});
