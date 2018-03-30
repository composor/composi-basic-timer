import {h} from 'composi';
import Time from '../lib/time';

const Display = (props, children) => {

  const time = new Time();
  const onChange = (e) => {
    props.onSecondsChanged(e.target.value);
  };

  const runningDisplayStyle = {
    flex: 1,
    color: props.time <= 10000 ? '#FE5C5C' : ''
  };

  return (
    <div className={props.status === 'started' ? 'display running' : 'display'}>
      {
        props.status === 'started'
      && <div className={props.time <= 10000 ? 'time-display bold' : 'time-display'} style={runningDisplayStyle}>
        <div class='running-time'>{time.getTime(props.time)}</div>
      </div>
      }
      {
        props.status !== 'started' &&
      <div className="time-display d-flex flex-column">
        <div className="text-info h6 align-self-center" >
          {time.getTime(props.time)}
        </div>
        <input className="display-time align-self-center" 
          maxLength="6" value={props.seconds}
          onInput={onChange} />
      </div>              
      }
      {children}
    </div>
  );
};

export default Display;
