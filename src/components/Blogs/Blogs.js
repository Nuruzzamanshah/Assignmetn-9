import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
      <div className="Question-section">
        <div className="Quesion">
          <h1 className="Question-ans">
            1.What is Context Api and what are the purpose of Contect Api?
          </h1>
          <p>
            <span className="span-tag">Ans:</span> The Context API is a
            structure of React that enables us to exchange unique details and
            assists in solving prop-drilling from all levels of our
            application.To make the provider accessible to other components, we
            need to wrap our app with it. It's main purpuse is to that it allows
            us to pass down and use (consume) data in whatever component we need
            in our React app without using props. In other words, React context
            allows us to share data (state) across our components more easily.
            On the other hand it makes our components more concise and allows us
            to create our own custom hooks.It Specifically designed for static
            data, that is not often refreshed or updated. Context API is the way
            to create global variables that can be passed around the component
            tree. Context API is an alternative to passing props manually in a
            component tree.
          </p>
        </div>
        <div className="Quesion">
          <h1 className="Question-ans">2.What is Semantic tag?</h1>
          <p>
            <span className="span-tag">Ans:</span> Semantic HTML tags provide
            information about the contents of those tags that goes beyond just
            how they look on a page. It that introduces meaning to the web page
            rather than just presentation. For example, a p tag indicates that
            the enclosed text is a paragraph. This is both semantic and
            presentational because people know what paragraphs are, and browsers
            know how to display them. It provides information about the contents
            of those tags that goes beyond just how they look on a page.The
            semantic HTML tags help the search engines and other user devices to
            determine the importance and context of web pages. The pages made
            with semantic elements are much easier to read and has greater
            accessibility. It offers a better user experience.
          </p>
        </div>
        <div className="Quesion">
          <h1 className="Question-ans">
            3.Difference among the Block, Inline and Inline-block elements?
          </h1>
          <p>
            <span className="span-tag">Ans: </span>
            <span className="span-tag">Inline elements:</span>
            Inline elements occupy only enough width that is sufficient to it
            and allows other elements next to it which are inline. Inline
            elements do not start from a new line and do not have top and bottom
            margins as block elements have. <br></br>
            <span className="span-tag">Block elements:</span>
            They consume the entire width available irrespective of their
            sufficiency. They always start in a new line and have top and bottom
            margins. It does not contain any other elements next to it.<br></br>
            <span className="span-tag">Inline-Block elements : </span>
            Inline-Block elements: The display value of inline-block works
            similarly to inline with one exception: the height and width of that
            element become modifiable.
          </p>
        </div>
      </div>
    );
};

export default Blogs;