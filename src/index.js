/* This code has been generated from your interaction model

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function


var speechOutput;
var reprompt;
var welcomeOutput = "Welcome to Trump Quotes, try asking for a quote by Donald Trump";
var welcomeReprompt = "Try asking for a quote by Donald Trump";

var data = {
    "quotes": [
        {
            "quote" : "This is thousands of times bigger, the United States, than the biggest company in the world."
        },
        {
            "quote" : "The one thing I would say — and I say this to people — I never realized how big it was."
        },
        {
            "quote" : "I really just see the bigness of it all, but also the responsibility. And the human responsibility."
        },
        {
            "quote" : "Making business decisions and buying buildings don’t involve heart. This involves heart. These are heavy decisions."
        },
        {
            "quote" : "I am somebody with a lot of heart."
        },
        {
            "quote" : "You have to love people. And if you love people, such a big responsibility."
        },
        {
            "quote" : "This is more work than in my previous life."
        },
        {
            "quote" : "I thought it would be easier."
        },
        {
            "quote" : "You're really into your own little cocoon, because you have such massive protection that you really can't go anywhere."
        },
        {
            "quote" : "I like to drive. I can't drive any more."
        },
        {
            "quote" : "A lot of good things are happening. Really good things. We're very proud of the job we've done."
        },
        {
            "quote" : "I think we've done more than perhaps any president in the first 100 days."
        },
        {
            "quote" : "But I don't want to set the 100 days as a standard."
        },
        {
            "quote" : "I think we've set some incredible foundations going onward, with relationships, with other countries, et cetera, et cetera."
        },
        {
            "quote" : "I'd give us an A."
        },
        {
            "quote" : "You know Obama worked on it for three years, got zippo, zero."
        },
        {
            "quote" : "Many people, human rights people, are talking about it. It's an incredible thing, especially when you meet her."
        },
        {
            "quote" : "Have you seen the tremendous success? ... That's another thing that nobody talks about. Have you seen the tremendous success we've had in the Middle East with the ISIS?"
        },
        {
            "quote" : "We have had tremendous success, but we don't talk about it."
        },
        {
            "quote" : "Not since Harry Truman has anybody done so much. That's a long time ago."
        },
        {
            "quote" : "I would say communication would be a little bit less than an A because I don't think we've gotten the word out what we've done because I think we're so busy getting it done that we're not talking about it."
        },
        {
            "quote" : "I have different teams. I think my military team has been treated with great respect. As they should be. I think my other team hasn't been treated with the respect that they should get. We have some very talented people."
        },
        {
            "quote" : "I think Reince has been doing an excellent job."
        },
        {
            "quote" : "The team gets along really, really well."
        },
        {
            "quote" : "I think that, you know, this is a very tough environment not caused necessarily by me."
        },
        {
            "quote" : "But I like having dissent — if it's a close topic."
        },
        {
            "quote" : "I think a lot of the media doesn't want us to get the word out."
        },
        {
            "quote" : "The fake media is some of the media."
        },
        {
            "quote" : "Fox treats me well, it's that Fox is the most accurate."
        },
        {
            "quote" : "I don't watch CNN anymore. I don't watch MSNBC anymore."
        },
        {
            "quote" : "I don't watch ‘Morning Joe.’ I never thought I had the ability to, and who used to treat me great by the way, when I played the game. I never thought I had the ability to not watch what is unpleasant, if it's about me."
        },
        {
            "quote" : "I saw on one of the networks that covers us extremely incorrectly and unfairly, they actually said…"
        },
        {
            "quote" : "I have all the ratings for all those morning shows. When I go, they go double, triple."
        },
        {
            "quote" : "The Democrats had a tremendous opportunity because the Electoral College, as I said, is so skewed to them."
        },
        {
            "quote" : "If Abe Lincoln came back to life, he would lose New York and he would lose California."
        },
        {
            "quote" : "You have to win Florida, you have to win South Carolina, North Carolina, you have to win Pennsylvania, you have to win all the way up, and then you have to win in the Midwest and you have to win places that — you know you win Michigan, you win Wisconsin, you win Ohio and Iowa."
        },
        {
            "quote" : "It's pretty good, right? The red is obviously us."
        },
        {
            "quote" : "The Electoral College is a very, very hard thing for the Republicans to win."
        },
        {
            "quote" : "Democrats are using that faux — or fake — Russia story in order to make themselves feel better for losing an election that's very hard for a Democrat to lose."
        },
        {
            "quote" : "The Russia is a faux story. It's made up."
        },
        {
            "quote" : "Nobody asks Hillary Clinton why her husband was over making speeches in Russia."
        },
        {
            "quote" : "So she had this massive advantage, she spent hundreds of millions of dollars more money than I spent. Hundreds of millions."
        },
        {
            "quote" : "So they lost an election, and they use the Russia story as a way, as best they can, as a way of justifying how they lost the election."
        },
        {
            "quote" : "I've developed great relationships with all of these leaders. Nobody's written that."
        },
        {
            "quote" : "President Xi of China, we have a, like, a really great relationship."
        },
        {
            "quote" : "Now I don't know that I think that's going to produce results but you've got a good chance."
        },
        {
            "quote" : "People have given me credit for having great chemistry with all of the leaders, including Egyptian President Abdel-Fattah el-Sissi."
        },
        {
            "quote" : "I think I've established amazing relationships that will be used the four or eight years, whatever period of time I'm here."
        },
        {
            "quote" : "I have great relationships with Congress."
        },
        {
            "quote" : "I've passed a lot of legislative bills that people don't even know about."
        },
        {
            "quote" : "You know, there are some cases where like people are saying, we're being obstructed by the Democrats, very much so."
        },
        {
            "quote" : "There's a hard-line group you can't break through, you can't. It's sad. You can't."
        },
        {
            "quote" : "The Republican Party has various groups, all great people. They're great people. But some are moderate, some are very conservative. The Democrats don't seem to have that nearly as much. You know the Democrats have, they don't have that. The Republicans do have that."
        },
        {
            "quote" : "President Obama took 17 months to do Obamacare. I've been here 92 days but I've only been working on the health care, you know I had to get like a little bit of grounding right?"
        },
        {
            "quote" : "So I've been working on health care for 60 days...You know, we're very close."
        },
        {
            "quote" : "It'll be a beautiful thing."
        },
        {
            "quote" : "My base definitely wants the border wall. My base really wants it."
        },
        {
            "quote" : "My base, which is a big base."
        },
        {
            "quote" : "We are not after the dreamers. We are after the criminals."
        },
        {
            "quote" : "The dreamers should rest easy. OK? I'll give you that."
        },
        {
            "quote" : "I am very upset with NAFTA. I think NAFTA has been a catastrophic trade deal for the United States."
        },
        {
            "quote" : "I am going to either renegotiate it or I am going to terminate it."
        },
        {
            "quote" : "I was all set to terminate. I looked forward to terminating. I was going to do it."
        },
        {
            "quote" : "In one way, I like the termination. In the other way, I like them, Mexican President Enrique Peña Nieto and Canadian Prime Minister Justin Trudeau, a lot, both of them"
        },
        {
            "quote" : "Hey, I’m a nationalist and a globalist. I’m both."
        },
        {
            "quote" : "I'm not giving him credit or not giving him credit, I'm just saying that's a very hard thing to do."
        },
        {
            "quote" : "North Korean leader Kim Jong Un is 27 years old. His father dies, took over a regime. So say what you want but that is not easy, especially at that age."
        },
        {
            "quote" : "If he's helping us with North Korea, with nuclear and all of the things that go along with it, who would call, what am I going to do, say, ‘By the way, would you help us with North Korea? And also, you're a currency manipulator.’ It doesn't work that way."
        },
        {
            "quote" : "They are working with us on North Korea. Now maybe that'll work out or maybe it won't. Can you imagine?"
        },
        {
            "quote" : "In which case they're very stupid people."
        },
        {
            "quote" : "The media, some of them get it, in all fairness. But you know some of them either don't get it."
        },
        {
            "quote" : "As to whether or not he's rational, I have no opinion on it. I hope he's rational."
        },
        {
            "quote" : "I believe President Xi is trying very hard. He certainly doesn’t want to see turmoil and death. He doesn’t want to see it. He is a good man."
        },
        {
            "quote" : "It’s a horrible deal. It was a Hillary Clinton disaster, a deal that should’ve never been made. It’s a one-way street."
        },
        {
            "quote" : "They called me up, they said, ‘Could we try negotiating?’ I said, ‘Absolutely, yes."
        },
        {
            "quote" : "I do have a very big farmer base, which is good. They like Trump, but I like them, and I’m going to help them."
        },
        {
            "quote" : "We’ve told them that we’ll either terminate or negotiate. We may terminate."
        },
        {
            "quote" : "We’re getting destroyed in [South] Korea."
        },
        {
            "quote" : "We are going to be doing trade deals that are going to be much better trade deals."
        }
    ]
}
//console.log(data.quotes);


 // 2. Skill Code =======================================================================================================
"use strict";
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
var speechOutput = '';
var handlers = {
    'LaunchRequest': function () {
          this.emit(':ask', welcomeOutput, welcomeReprompt);
    },
	'AMAZON.HelpIntent': function () {
        speechOutput = 'You can say tell me a donald trump quote, or tell me a quote by the president.';
        reprompt = '';
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        speechOutput = 'It is all fake new anways';
        this.emit(':tell', speechOutput);
    },
    'AMAZON.StopIntent': function () {
        speechOutput = 'It is all fake new anways';
        this.emit(':tell', speechOutput);
    },
    'SessionEndedRequest': function () {
        speechOutput = '';
        this.emit(':tell', speechOutput);
    },
	"TrumpQuoteIntent": function () {
		var speechOutput = randomArrayElement(getQuotes());
    	//any intent slot variables are listed here for convenience

    	//Your custom intent handling goes here
        this.emit(":tell", "Here is a quote, " + speechOutput);
    },
};


exports.handler = (event, context) => {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function getQuotes() {
    var list = [];
    for (var i = 0; i < data.quotes.length; i++) {
        list.push(data.quotes[i].quote);
    }
    return list;
}


function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
	  var updatedIntent= null;
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code is necessary if using ASK SDK versions prior to 1.0.9
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');

    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
function isSlotValid(request, slotName){
        var slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        var slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    var alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    var returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}

function randomArrayElement(array) {
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
