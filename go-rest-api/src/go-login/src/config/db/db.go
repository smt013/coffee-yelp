package db

import (
	"context"
	"fmt"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"go.mongodb.org/mongo-driver/mongo/options"
	"time"
)

func GetDBCollection() (*mongo.Collection, error) {
	fmt.Println("MADE IT TO DB.GO")
	//client, err := mongo.Connect(context.TODO(), "mongodb://localhost:27017")
	mongoURL := "mongodb://localhost:27017"
	client, err := mongo.NewClient(options.Client().ApplyURI(mongoURL))
	if err != nil {
		return nil, err
	}

	// Connect the mongo client to the MongoDB server
	fmt.Println("Before connection")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)

	if err != nil {
		fmt.Println("Error: %v", err)
	}

	// Ping MongoDB
	ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
	if err = client.Ping(ctx, readpref.Primary()); err != nil {
		fmt.Println("could not ping to mongo db service: %v\n", err)
		return nil, err
	}

	fmt.Println("connected to Mongo database:", mongoURL)
	// // Check the connection
	// err = client.Ping(context.TODO(), nil)
	// if err != nil {
	// 	return nil, err
	// }
	collection := client.Database("GoLogin").Collection("users")
	return collection, nil
}
