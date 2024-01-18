package com.prakhars.collaborateandcode.web;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CodeEditorController {

    @MessageMapping("/edit-code/{roomId}")
    @SendTo("/topic/code/{roomId}")
    public String editCode(@DestinationVariable String roomId, String code) {
        // Handle collaborative code editing logic (e.g., store code in the database)
        return code;
    }
}
