import { GoQuote } from "react-icons/go";
import {
  ArticleComponent,
  ArticleContainer,
  ArticleContainerContent,
  ArticleContainerImg,
  Card
} from "../styledComponent/ArticleStyle";
import personImg from "./avatar-testimonial.jpg";
import img from "./pexels-pixabay-270408.jpg";
export default function Article() {
  return (
    <>
      <ArticleComponent>
        <ArticleContainer>
          <ArticleContainerImg>
            <img src={img} alt="" />
          </ArticleContainerImg>
          <ArticleContainerContent>
            <h2>Stay Productive, Wherever You Are</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              provident! Optio, dicta quae? Esse non alias, iure odio reiciendis
              quos!
            </p>
            <Card>
              <GoQuote />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis odio nulla ullam repellat accusamus quam!
              </p>
              <div className="person">
                <div className="person-img">
                  <img src={personImg} alt="" />
                </div>
                <div className="person-content">
                  <h3>Ahmed Omer</h3>
                  <p>FrontEnd Developer</p>
                </div>
              </div>
            </Card>
          </ArticleContainerContent>
        </ArticleContainer>
      </ArticleComponent>
    </>
  );
}
