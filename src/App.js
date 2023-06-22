import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="85f0dff6-1a11-4f8a-ba1b-18bdf03314c1"
            userName="mehdiridmani"
            userSecret="qwer1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

        />
    );
}


export default App;