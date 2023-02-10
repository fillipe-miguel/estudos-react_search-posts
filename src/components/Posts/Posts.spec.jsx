import { Posts } from ".";
import { render, screen } from "@testing-library/react";

const props = {
  posts: [
    {
      id: 1,
      title: "title 1",
      body: "body 1",
      cover: "img/img1.pf",
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
      cover: "img/img2.pf",
    },
    {
      id: 3,
      title: "title 3",
      body: "body 3",
      cover: "img/img3.pf",
    },
  ],
};

describe("<Posts/>", () => {
  it("should render posts", () => {
    // Passando a func para poder usar ali na frente ela que mostra o html montado no console
    render(<Posts {...props} />);

    expect(screen.getAllByText(/body/i)).toHaveLength(3);

    // Pegando uma imagem especifica do card componentm
    expect(screen.getByRole("img", { name: /title 3/i })).toHaveAttribute(
      "src",
      "img/img3.pf"
    );
  });

  it("should match with snappshot", () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
