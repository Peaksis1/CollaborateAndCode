package com.prakhars.collaborateandcode.web;

import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CodeEditorController {

    @GetMapping("/dashboard")
    public ResponseEntity<String> getMethodName(@RequestParam String param) {
        return ResponseEntity.ok("ASDDSAASDDSA");
    }

    @MessageMapping("/edit-code/{roomId}")
    @SendTo("/topic/code/{roomId}")
    public String editCode(@DestinationVariable String roomId, String code) {
        // Handle collaborative code editing logic (e.g., store code in the database)
        return code;
    }
}
