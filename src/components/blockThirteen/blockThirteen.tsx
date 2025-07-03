import './blockThirteen.css'


export const BlockThirteen = () => {
   return (
  <div className="block-thirteen">
    <img
      className="block-thirteen-img"
      src="https://ableton-production.imgix.net/about/photo-8.jpg?crop=right&dpr=2&fit=crop&h=213&ixjsv=1.1.3&q=50&w=354"
      alt="office"
    />
    <div className="block-thirteen-text">
      <p>
        We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.
      </p>
      <a href="/" className="block-thirteen-link">
        See latest jobs &rsaquo;
      </a>
    </div>
  </div>
);

}