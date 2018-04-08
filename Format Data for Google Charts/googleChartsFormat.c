/* John Nguyen & Manoj Saripalli
 * Program to format the country and population for Google Charts API
*/

// Import standard libraries for problems 
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) 
{
    char name[128]; // Name of the country
    int numPlayer;    // Number of active players in the country
    
    // Declaration of file pointers
    FILE *countryPtr, *activePlayerPtr, *outputPtr;
    
    // Open the text files containing the data about the countries and
    // create/overwrite the output file
    if ( ( countryPtr = fopen("countries.txt", "r+") ) == NULL )
    {
        printf("countries.txt could not be opened\n");
        return -1;
    }
    if ( ( activePlayerPtr = fopen("activePlayers.txt", "r+") ) == NULL )
    {
        printf("activePlayers.txt could not be opened\n");
        return -1;
    }
    if ( ( outputPtr = fopen("formattedOutput.txt", "w+") ) == NULL )
    {
        printf("formattedOutput.txt could not be made\n");
        return -1;
    }
    
    // Loop through for 150 lines of data from each .txt file
    for (int i = 0; i < 150; i++)
    {
        // Get the line from the countries.txt containing the country name
        fgets(name, 128, countryPtr);
        // Remove the newline from the fgets result
        strtok(name, "\n");
        
        // Get the number of active players for the country
        fscanf(activePlayerPtr, "%d\n", &numPlayer);
        
        // Format the country name and number of active players 
        // and write to formattedOutput.txt
        fprintf(outputPtr, "['%s', %d],\n", name, numPlayer); 
    }
    
    fclose(countryPtr); countryPtr = NULL;
    fclose(activePlayerPtr); activePlayerPtr = NULL;
    fclose(outputPtr); outputPtr = NULL;
    return 0;
}
