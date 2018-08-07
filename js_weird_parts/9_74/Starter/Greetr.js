(function Greetr(global, $) {
    
    // 'new an object
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    // hidden within scope of IIFE and never directly accessible
    var supportedLangs = ['en', 'es'];
   
    // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    
    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }
    
    // prototype holds methods to save memory space
    Greetr.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        
        validate: function() {
            // check that it is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid Language";
            }
        },
        
        // retrieve messages from object by referring to properties using the [] syntax
        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        
        // chainable methods return their own containing object
        greet: function(formal) {
            var msg;
            
            // if null or undefined it will coerce to false;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            if(console) {
                console.log(msg);
            }
            
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            
            // makes chainable
            return this;
        },
        setLang: function(lang) {
            
            // sets the language
            this.language = lang;
            
            // validates
            this.validate();
            
            // makes chainable
            return this;
        },
        
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            
            if (!selector) {
                throw 'Missing jQuery selector';
            }
            
            // determine the message
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            
            // inject the message in the chosen place in the DOM 
            $(selector).html(msg);
            
            // makes chainable
            return this;
        }
    };  
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';  // Default values
        self.lastName = lastName || '';
        self.language = language || 'en';
        
        self.validate();
    }
    
    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;  // any object created with the init function uses Greetr.prototype to house methods
    
    global.Greetr = global.G$ = Greetr;  // Exposing Greetr to the global objet, and creating G$ alias
    
}(window, $));  // IIFE is for security. 