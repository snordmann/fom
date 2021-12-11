package main.main;

public final class App {
  public static void main(String[] args) {
    java.net.ServerSocket http_socket;
    java.net.Socket http_server;
    java.text.SimpleDateFormat timeFormatter = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
    try {
      http_socket = new java.net.ServerSocket(8008);
      System.out.println("Listening on http://localhost:" + http_socket.getLocalPort());
      while (true) {
        http_server = http_socket.accept();

        StringBuilder requestBuilder = new StringBuilder();
        String line = "";
        java.io.BufferedReader reader= new java.io.BufferedReader(new java.io.InputStreamReader(http_server.getInputStream()));
        do {
          line = reader.readLine();
          requestBuilder.append(line + "\n");
        } while (!line.isEmpty());

        String request_method = getRequestMethod(requestBuilder.toString());
        String request_path = getRequestPath(requestBuilder.toString());

        System.out.println(timeFormatter.format(new java.util.Date()) + " " + request_method + " " + request_path);
        if ("GET".equals(request_method) && "/".equals(request_path)) {
          sendResponse("200 OK", generate_html_page(), http_server.getOutputStream());
        } else {
          sendResponse("405 Method Not Allowed", "", http_server.getOutputStream());
        }
      }
    } catch (java.io.IOException e) {
      System.out.println("IOException");
      e.printStackTrace();
    } catch (Exception e) {
      System.out.println("Exception");
      e.printStackTrace();
    } finally {
    }
  }

  private static String generate_html_page() {
    StringBuilder htmlBuilder = new StringBuilder();
    htmlBuilder.append("<!DOCTYPE html>");
    htmlBuilder.append("<html>");
    htmlBuilder.append("<head>");
    htmlBuilder.append("<title>My awesome Website</title>");
    htmlBuilder.append("</head>");
    htmlBuilder.append("<body>");
    htmlBuilder.append("<h1>The server works!</h1>");
    htmlBuilder.append("<p>Hello world!</p>");
    htmlBuilder.append("</body>");
    htmlBuilder.append("</html>");
    return htmlBuilder.toString();
  }

  private static String getRequestMethod(String request) {
    return request.split(" ")[0];
  }
  private static String getRequestPath(String request) {
    return request.split(" ")[1];
  }

  private static void sendResponse(String http_code, String body, java.io.OutputStream output_stream) {
    try {
      StringBuilder http_builder = new StringBuilder();
      String httpResponse = "";

      http_builder.append("HTTP/1.1 " + http_code + "\n");
      http_builder.append("Content-length: " + body.length() + "\n");
      http_builder.append("\n");
      http_builder.append(body);

      httpResponse = http_builder.toString();
      output_stream.write(httpResponse.getBytes());
      output_stream.flush();
    } catch (java.io.IOException e) {
      System.out.println("Whatever");
    }
  }
}
