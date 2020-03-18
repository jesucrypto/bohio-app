#!/bin/bash

#takes component names as arguments and
#creates subdirectories for each one. Each
#subdirectory will contain component.js, component.css  and component.test.js
#use -s before a list of component names to make them stateless components.


if [[ "$#" == "0" ]]
then
  printf "Usage: add-component [COMPONENT] ... [OPTION] [COMPONENT] ... "
  printf "\ncreates components"
  printf "\n  -s  make components stateless\n"
fi

componentTemplate="stateful_component_template.js"
for arg in "$@"
  do
    if [[ "$arg" == "-s" ]]
    then
      componentTemplate="stateless_component_template.js"
      continue
    fi
    minimized=$(echo "$arg" | tr '[:upper:]' '[:lower:]')
    componentDirectory="../src/components/$minimized"
    #converts to lowercase for use as filename
    mkdir $componentDirectory
    touch "$componentDirectory"/"$minimized".js
    touch "$componentDirectory"/"$minimized".test.js
    touch "$componentDirectory"/"$minimized".css
    sed "s/COMPONENT/$arg/g" $componentTemplate > "$componentDirectory"/"$minimized".js
  done
