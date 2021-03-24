# HW3-PasswordGenerator

The purpose of this activity was to get a simple but realistic approach of how a user can interact with a webpage by asking the user for some preferences and creating a password that taked into account those inputs. 

The task consisted in modifying an existin webpage that had both the html and css files already developed but was missing the interactivity that can be achieved with javascript. The challenge involved getting the following information from the user and then creating a password with those requirements:

* Asking the user how many characters he wants in his password
* Asking wheter he wants or not lowercase characters in his password
* Asking wheter he wants or not uppercase characters in his password
* Asking wheter he wants or not numbers in his password
* Asking wheter he wants or not special characters in his password

After creating the password, the information was then supposed to be displayed on the webpage.

## Technologies

This project was developed using:
* CSS3
* HTML5
* JavaScript

## Setup

To run this project clone this repository in a folder and open the html file, there is also a deployed webpage that shows the final version of the project, you can access it by opening the link at the end of this file

## Development process

This activity consisted in implemenenting window alerts, prompts and confirms that allowed the code to get some data from the user and then return a password with said requirements.

The code was segmented into three pieces. The first one kept track of where the password was going to be displayed and was once the password was built, it was also in charge of displaying the password, this function can be seen in the code sample image #1.

The second one was in charge of asking the user for their requirements, making sure that the requirements met the minimum criteria to be able to create a password and storing the characters that were randomly generated. This was achieved by creating an array that was able to tell when the password already had at least 1 character of each tipe. This data was compared with an array that had the requirements given by the user and if these matched, then the password fulfilled the user requirements, if it did not, then the password is erased and a new one is generated. The code that was in charge of asking the user for the requirements is shown in the code sample #2 image and the code that managed the logic regarding wheter the code fulfilled all the requirements or not can be seen in the code sample #3 image.

The last one was in charge of creating a single random character that was going to be added to the password, this section can be appreciated in the code sample image #4.

|![Sample #1 code - Keeping track of password display area](assets/images/sample-code-1.JPG)   |
| ------------- |
|Sample #1 code - Keeping track of password display area|

&nbsp;



|![Sample #2 code - Asking the user for requirements](assets/images/sample-code-2.JPG)   | 
| ------------- |
| Sample #2 code - Asking the user for requirements |

&nbsp;

|![Sample #3 code - Password generator logic](assets/images/sample-code-3.JPG)   | 
| ------------- |
| Sample #3 code - Password generator logic |

&nbsp;

|![Sample #4 code - Character randomizer logic](assets/images/sample-code-4.JPG)   | 
| ------------- |
| Sample #4 code - Character randomizer logic |

&nbsp;



## Deployed webpage:
* https://erickcc.github.io/HW3-PasswordGenerator/
