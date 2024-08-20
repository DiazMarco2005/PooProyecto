FROM openjdk:22-jdk-alpine

WORKDIR /app

COPY pom.xml ./
RUN mvn dependency:go-offline -B

COPY src ./src

RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/shc-server.jar"]
