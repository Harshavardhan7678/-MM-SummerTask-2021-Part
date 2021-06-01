import "./SinglePost.css";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from '@material-ui/icons/Favorite';

function SinglePost() {
  return (
    <div className="SinglePost">
      <div className="SinglePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
          alt=""
          className="SinglePostImg"
        />
        <h1 className="SinglePostTitle">
          Vacation
          <div className="SinglePostEdit">
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <IconButton>
              <EditIcon/>
            </IconButton>
            <IconButton>
              <DeleteIcon/>
            </IconButton>

          </div>
        </h1>
        <div className="SinglePostInfo">
          <span className="SinglePostAuthor">
            Author: <b>Harsha</b>
          </span>
          <span className="SinglePostDate">1 Hour Ago</span>
        </div>
        <p>
          loremm The rusty nail stood erect, angled at a 45-degree angle, just
          waiting for the perfect barefoot to come along. She had a difficult
          time owning up to her own crazy self. He decided water-skiing on a
          frozen lake wasn’t a good idea. Lucifer was surprised at the amount of
          life at Death Valley. The Tsunami wave crashed against the raised
          houses and broke the pilings as if they were toothpicks. She had a
          habit of taking showers in lemonade. He invested some skill points in
          Charisma and Strength. Twin 4-month-olds slept in the shade of the
          palm tree while the mother tanned in the sun. She always speaks to him
          in a loud voice. Peanut butter and jelly caused the elderly lady to
          think about her past. All she wanted was the answer, but she had no
          idea how much she would hate it. Hang on, my kittens are scratching at
          the bathtub and they'll upset by the lack of biscuits. When money was
          tight, he'd get his lunch money from the local wishing well. They were
          excited to see their first sloth. She couldn't decide of the glass was
          half empty
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
