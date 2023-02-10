import { PostCard } from ".";

import { render, screen } from "@testing-library/react";

import { props } from "./mock";

describe("<PostCard/>", () => {
    it("should render PostCard correctly", () => {
        render(<PostCard {...props} />);

        // Vendo se a tag <img> que tenha o props.title no indentificador está sendo renderizada no documento
        // Aqui ja estou testando se ela existe e se tem o attr por logica
        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute(
            "src",
            props.cover
        );

        // Estou vendo se ele tem um heading / H1 H2 H3 / com o conteudo
        expect(
            screen.getByRole("heading", { name: props.title })
        ).toBeInTheDocument();

        expect(screen.getByText(props.body)).toBeInTheDocument();
    });

    it("should match snaoshot", () => {
        const { container } = render(<PostCard {...props} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
