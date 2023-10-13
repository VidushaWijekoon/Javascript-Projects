# js

    ## what is javascript

        - JS is one of the core technologies of the web alognside HTML, CSS
        - it's a high level, interpreted programming language that can be used on the client side as well the server side with nodejs
        - Dynamic Type Programming Langues
            - Python, Javascript
            - No need to explicity define the type our variable
        - Static Programming Language
            - Need defined the type of the variable
            - C, C++, Java, TypeScript
            - This can make you code more verbose and less prone to errors

    ## Used for JS

        - DOM (Document Object Model) Manipulation
        - Event Hanlder (Handel, Mouse Click, form submission, keyboard, dropdown)
        - Asynchoronous Request (HTTP Request, API) happing without reload Page
        - Animation & Effects
        - Data Manipulation (Sorting, Filtering)
        - Storing Data (Session, Cookies, LocalStorage)
        - Single Page Application (SAP)
        - Creating API's & Web Services (Node, Deno)

    ## Variables
        (Store the data temporary in the memory)

        - var (es2015 update) not using, can acess after initialization
        - let cannot access before initialization
        - const (constant value) this cannot reassign in the future

        - naming variables
            - letters, number, underscore , $ dollar sign
            - cannot start with number

            * Word Formatting

                - CamelCase // firstName
                - underscore // first_name (php way)
                - FirstName // PascalCase
                - firstname // lowercase

    ## Data Types

        - Primitive Data Type
            - String (Sequence of characters)
            - Number (interger and floating point number)
            - Boolean (True or False)
            - Null (Intentional absence of any object value) Suppose to be empty
            - Undefined (A variable that has not yet been defined or assigned)
            - Symbol (Build-in object whose contructor returns a unique symbol)
            - BigInt (ES6 , Big Integer, Can store larger number than Number type)

        - Reference Data Type (Objects)
            - Objects literals
            - Arrays
            - Functions

        - String in build funtions
            - typeof (find the data type)

    ## Type Casting or Convertion

        - String to Number = + Best Practice, parseInt(amount), Number(amount)
        - Number to String = toString(amount), String(amount)
        - String to Decimal = parseFloat(amount)
        - Number to Boolean = Boolean(amount)

    ## Operators

        - Arithmetic Operators
            - +	    Addition
            - -	    Subtraction
            - *	    Multiplication
            - **    Exponentiation
            - /	    Division
            - %	    Modulus (Division Remainder)
            - ++    Increment
            - --    Decrement

        - Assignment Operators

            - (=, +=, -=, **=, *=, /=, %=)

        - Comparison Operators
            - ==    equal to
            - ===   equal value and equal type
            - !=    not equal
            - !==   not equal value or not equal type
            - >	    greater than
            - <	    less than
            - >=	greater than or equal to
            - <=	less than or equal to
            - ?	    ternary operator

        - Logical Operators
            - &&	logical and
            - ||	logical or
            - !	    logical not

        - Bitwise Operators
            - &	    AND
            - |	    OR
            - ~	    NOT
            - ^	    XOR
            - <<	left shift
            - >>	right shift
            - >>>	unsigned right shift

    ## String
        - Properties and Methods
            - length
            - access to character name[0]
            - toUpperCase()
            - toLowerCase()
            - charAt()
            - indexOf()
            - substring(2, 5) -> print between 2 to 5
