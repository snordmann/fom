package main.main;

import java.io.IOException;
import java.io.OutputStream;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class RootHandler implements HttpHandler {
  @Override
  public void handle(HttpExchange exchange) {
    try {
      OutputStream outputStream = exchange.getResponseBody();
      StringBuilder stringBuilder = new StringBuilder();
      String httpResponse = "";
      if (exchange.getRequestMethod().equals("GET")) {
        stringBuilder.append("{\"hostname\": \"My JAVA HTTP Server\"}");
        httpResponse = stringBuilder.toString();
        exchange.sendResponseHeaders(200, httpResponse.length());
      } else {
        stringBuilder.append("{\"ERROR\": \"Request method " + exchange.getRequestMethod() + " is not supported.\"}");
        httpResponse = stringBuilder.toString();
        exchange.sendResponseHeaders(405, httpResponse.length());
      }
      outputStream.write(httpResponse.getBytes());
      outputStream.flush();
      outputStream.close();
    } catch (IOException e) {
      System.out.println("Whatever");
    }
  }
}
