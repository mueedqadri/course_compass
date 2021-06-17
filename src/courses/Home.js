import React from 'react-dom';
import Helmet from 'react-helmet';
import book from './images/Books.jpg';
import study from './images/Study.jpeg';
import lecture from './images/Lecture.jpeg';


function Home() {
    return (
        <div>
            <Helmet>
                <title>University | Home</title>
            </Helmet>
            <div className="jumbotron text-center">
                <h1>University</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Title 1</h3>
                        <img className="img-fluid" alt="Books on a table" src={book} />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Title 2</h3>
                        <img className="img-fluid" alt="Professor taking a class" src={lecture} />
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Title 3</h3>
                        <img className="img-fluid" alt="Students studying" src={study} />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;