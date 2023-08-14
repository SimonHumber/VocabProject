
const WordAndDefinitions = (props) => {

  return (
    <div>
      <p>Word: {props.data && props.data.word}</p>

      <div>
        {props.data &&
          props.data.results &&
          props.data.results.map((result, index) => (
            <span key={index}>
            <p>
              Definition {index + 1}:&nbsp;
              {result.definition}
              {index !== props.data.results.length - 1 && ", "}
              <br />
            </p>
          </span>
          ))}
      </div>
    </div>
  );
};

export default WordAndDefinitions;
