export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div data-testid="img-cont">
      <img data-testid="img-tag" src={src} alt={alt} style={{borderRadius:borderRadius||0,width:width||100,height:height||100}} />
    </div>
  );
};
