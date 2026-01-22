#!/bin/bash

# Test plugin hook handler - logs when user submits a prompt
# This hook runs on UserPromptSubmit event

LOG_FILE="/tmp/test-plugin-hook.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Read the hook input from stdin
INPUT=$(cat)

# Log the event
echo "[$TIMESTAMP] UserPromptSubmit hook triggered" >> "$LOG_FILE"
echo "[$TIMESTAMP] Input received: $INPUT" >> "$LOG_FILE"
echo "---" >> "$LOG_FILE"

# Exit 0 to allow the prompt to proceed
exit 0
