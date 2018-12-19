#! /bin/bash

# this is a comment

VARIABLE='hello'     #white space matters
CONDITION=false      #not a boolean

echo $VARIABLE

echo "${VARIABLE}! this like a template literal"

echo 'single quotes (strong quotes) put out literal characters ${VARIABLE}'

if [ $CONDITION ]; then
  #do some stuff
  echo first if statement
fi


if [ $CONDITION ]; then
  #do another
  echo 'if statement'
elif [ $CONDITION ]; then
  #statements
  echo "elif statement"
fi

case 'hello' in
  'hello' )
    echo matches this
    ;; #omitting this does not allow code past * to run
  * ) # similar to default
    echo and this
    echo "but it won\'t execute like in JS (break statement not needed)"
    ;;
esac

while [[ $NOCONDITION ]]; do
  echo this won\'t run
done
