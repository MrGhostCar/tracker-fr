
import {useStompClient} from "react-stomp-hooks";

export const PublishComponent = () => {
    const stompClient = useStompClient();
    
    const publishMessage = () => {
      if(stompClient) {
        stompClient.publish({destination: '/app/vehicle/position', body: 'Hello World'})
      }
    }
    return (
      <button onClick={publishMessage}> Send message </button>
    )
  }