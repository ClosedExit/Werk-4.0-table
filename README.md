A simple react-app with the topic called 'Plant watch'. My application features the latest version of the react-framework 'next.js 14', (performancewise).  Plants can be added into a table together with species, name and dates to observe the watering process. It'll also feature one of ant-designs table functionalities as syntactic sugar.


Please install npm - modules (incl. ant-design with the following command <npm install antd --save>).

To run the application please enter the folder "Werk-4.0-table" and run the command <npm run dev>.  The application should then be runnning on localhost:3000.

The application is lacking some major functionalities at the moment. The goal was not to use a form, but a modal to promt the inputs. Unfortunatly the form cannot be wrapped in a modal just like that. Also I ran into the difficulty of prerendering some entries on the serverside, which I also couldn't solve, since functionalities for dynamic changes like the "useState" can't be used serversided. Therefore the whole application runs client-sided (which was not the goal). The only thing outsourced is the data.
