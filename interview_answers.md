# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
A functional component has access to hooks and does not need a render function or constructor.
Stateful components are also considered legacy software.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
component will mount is called right before rendering the component and component will update is called when reerendering the component.

3. Define stateful logic.
staetful login is any code that changes the state of our UX via the state object or with hooks.

4. What are the three step of creating a successful test? What is done in each phase?
arrange: the elements that will be acted on are defined and queried for in the testing program
act: user actions are replicated with testing software to interact with the virtual dom
assert: statements are made about what should be happening and the test returns either true or false depending on the results
