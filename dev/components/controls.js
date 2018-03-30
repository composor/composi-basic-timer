import {h} from 'composi';

const Controls = (props) => (
    <div className="controls">
      {
        props.status !== 'started' &&
        <button className="btn btn-lg btn-success"
          disabled={!props.canStart}
          onclick={() => props.startTimer()}>
          <i className="fa fa-play fa-2x mr-2 mb-3 text-right" />
        </button>
      }

      {
        props.status === 'started' &&
        <button className="btn btn-lg btn-dark"
          onclick={props.stopTimer}>
          <i className="fa fa-stop fa-2x mr-2 mb-3 text-right" />
        </button>
      }

      <button className="btn btn-lg btn-primary"
        onclick={props.resetTimer}>
        <i className="fa fa-refresh fa-2x ml-2 mb-3 text-left" />
      </button>
    </div>
);

export default Controls;
