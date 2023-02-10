import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput/>", () => {
    const fn = jest.fn();

    // NAO FUNFOU PQ O USER EVENT NÃO TA GUNCIONANDO LEGAL AQUI

    // it("should call handleChange function on each key pressed", async () => {
    //     render(<TextInput onChange={fn} value={"teste"} />);

    //     // Salvando o elemento dentro de uma variavel
    //     const element = screen.getByPlaceholderText(/Escreva sua pesquisa:/i);
    //     const value = "o valor";

    //     const user = userEvent.setup();

    //     // userEvent.type(element, value);

    //     await user.type(element, "es");

    //     // Vendo se o valor digitado ali é o valor do value
    //     expect(element.value).toBe("Teste");
    // });

    it("should have a search value of value", () => {
        render(<TextInput onChange={fn} value={"teste"} />);

        const element = screen.getByPlaceholderText(/Escreva sua pesquisa:/i);

        // testando se ele está renderizando
        // expect(element).toBeInTheDocument(); ==> faço esse teste por logica ali

        // testando se o valor passado ta realmente passando
        expect(element.value).toBe("teste");
    });

    it("should match with snappshot", () => {
        const { container } = render(
            <TextInput onChange={fn} value={"teste"} />
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
